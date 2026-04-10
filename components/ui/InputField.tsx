import React from "react";
import { cn } from "@/lib/utils";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> {
  label: string;
  type?: "text" | "email" | "select" | "textarea" | "password" | "number" | "tel";
  options?: string[];
  containerClassName?: string;
  labelClassName?: string;
}

export const InputField = React.forwardRef<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement, InputFieldProps>(
  ({ label, type = "text", options, className, containerClassName, labelClassName, id, ...props }, ref) => {
    const commonClasses = "w-full bg-background-lighter rounded-sm h-[3rem] px-3 placeholder:font-inter text-gray-lighter font-light placeholder:font-light placeholder:text-gray-lighter outline-none ring-none transition-all duration-200 focus:ring-1 focus:ring-primary-dark/20";
    
    const renderInput = () => {
      switch (type) {
        case "textarea":
          return (
            <textarea
              id={id}
              className={cn(commonClasses, "h-[10.5rem] py-5 resize-none", className)}
              ref={ref as React.Ref<HTMLTextAreaElement>}
              {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
            />
          );
        case "select":
          return (
            <select
              id={id}
              className={cn(commonClasses, "appearance-none", className)}
              ref={ref as React.Ref<HTMLSelectElement>}
              {...(props as React.SelectHTMLAttributes<HTMLSelectElement>)}
            >
              {options?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          );
        default:
          return (
            <input
              type={type}
              id={id}
              className={cn(commonClasses, className)}
              ref={ref as React.Ref<HTMLInputElement>}
              {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
            />
          );
      }
    };

    return (
      <div className={cn("flex flex-col gap-y-2", containerClassName)}>
        <label
          htmlFor={id}
          className={cn(
            "font-inter font-medium text-gray text-[1rem] leading-[1.94rem] uppercase",
            labelClassName
          )}
        >
          {label}
        </label>
        {renderInput()}
      </div>
    );
  }
);

InputField.displayName = "InputField";
