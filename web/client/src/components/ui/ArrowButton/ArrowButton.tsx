type ArrowButtonProps = {
  disabled: boolean;
  left?: boolean;
  className?: string;
  onClick: (e: any) => void;
};

export const ArrowButton = ({
  disabled: disabledProps,
  className,
  left,
  onClick,
}: ArrowButtonProps) => {
  const disabled = disabledProps ? " arrow--disabled" : "";

  return (
    <button onClick={onClick} className={`${className} ${disabled}`}>
      {!className && (
        <svg
          className={`arrow ${
            left ? "arrow--left" : "arrow--right"
          } ${disabled}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          {left && (
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
          )}
          {!left && <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />}
        </svg>
      )}
    </button>
  );
};
