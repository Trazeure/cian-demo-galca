"use client";

interface Step {
  number: number;
  label: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
}

export default function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="flex items-center w-full">
      {steps.map((step, index) => {
        const isCompleted = step.number < currentStep;
        const isActive = step.number === currentStep;
        const isFuture = step.number > currentStep;

        return (
          <div key={step.number} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 flex-shrink-0"
                style={{
                  background: isCompleted
                    ? "#008100"
                    : isActive
                    ? "transparent"
                    : "transparent",
                  border: isCompleted
                    ? "2px solid #008100"
                    : isActive
                    ? "2px solid #008100"
                    : "2px solid #8e8e93",
                  color: isCompleted
                    ? "#ffffff"
                    : isActive
                    ? "#008100"
                    : "#8e8e93",
                }}
              >
                {step.number}
              </div>
              <span
                className="text-xs font-medium text-center whitespace-nowrap hidden sm:block"
                style={{ color: isFuture ? "#8e8e93" : "#008100" }}
              >
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className="flex-1 h-0.5 mx-2 mb-4 sm:mb-5 transition-all duration-300"
                style={{ background: isCompleted ? "#008100" : "#ededed" }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
