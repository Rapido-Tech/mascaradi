import * as React from "react";
import { cn } from "@/lib/utils";

interface CurrencyInputProps extends Omit<React.ComponentProps<"input">, "onChange"> {
  value?: string;
  onChange?: (value: string) => void;
  currency?: string;
  placeholder?: string;
}

const CurrencyInput = React.forwardRef<HTMLInputElement, CurrencyInputProps>(
  ({ className, value = "", onChange, currency = "KES", placeholder, ...props }, ref) => {
    const [displayValue, setDisplayValue] = React.useState(value);

    // Format number with thousand separators
    const formatNumber = (num: string) => {
      // Remove all non-digits
      const digits = num.replace(/\D/g, '');
      
      if (!digits) return '';
      
      // Add thousand separators
      return digits.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    // Get raw number value (without commas)
    const getRawValue = (formattedValue: string) => {
      return formattedValue.replace(/,/g, '');
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      const rawValue = getRawValue(inputValue);
      const formattedValue = formatNumber(rawValue);
      
      setDisplayValue(formattedValue);
      onChange?.(rawValue);
    };

    // Update display value when prop value changes
    React.useEffect(() => {
      if (value !== getRawValue(displayValue)) {
        setDisplayValue(formatNumber(value));
      }
    }, [value]);

    return (
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground font-medium">
          {currency}
        </span>
        <input
          ref={ref}
          type="text"
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background pl-12 pr-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className
          )}
          value={displayValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          {...props}
        />
      </div>
    );
  }
);

CurrencyInput.displayName = "CurrencyInput";

export { CurrencyInput };