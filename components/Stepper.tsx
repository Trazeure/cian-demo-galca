"use client";

interface Step { number: number; label: string; }
interface StepperProps { steps: Step[]; currentStep: number; }

export default function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="flex items-center w-full">
      {steps.map((step, index) => {
        const completed = step.number < currentStep;
        const active    = step.number === currentStep;
        const future    = step.number > currentStep;

        return (
          <div key={step.number} className="flex items-center flex-1 last:flex-none">
            {/* Circle + label */}
            <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
              <div
                className="w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center text-xs md:text-sm font-bold transition-all duration-300 flex-shrink-0 shadow-sm"
                style={{
                  background: completed ? "#008100" : active ? "#fff" : "#f3f4f6",
                  border: completed ? "2px solid #008100" : active ? "2px solid #008100" : "2px solid #d1d5db",
                  color: completed ? "#fff" : active ? "#008100" : "#9ca3af",
                }}
              >
                {completed
                  ? <svg width="12" height="10" viewBox="0 0 12 10" fill="none"><path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  : step.number
                }
              </div>
              <span
                className="text-[10px] md:text-xs font-medium text-center leading-tight max-w-[70px] md:max-w-[90px]"
                style={{ color: future ? "#9ca3af" : active ? "#008100" : "#374151" }}
              >
                {step.label}
              </span>
            </div>

            {/* Connector */}
            {index < steps.length - 1 && (
              <div className="flex-1 mx-2 mb-5 md:mb-6">
                <div
                  className="h-0.5 w-full rounded-full transition-all duration-500"
                  style={{ background: completed ? "#008100" : "#e5e7eb" }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
