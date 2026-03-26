import '@shared/styles/main.scss';
import '@shared/styles/Button.scss';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    buttonContent: React.ReactNode;
    variant: 'primary' | 'secondary' | 'ghost' | 'success';
};

function Button({
    className,
    buttonContent,
    variant = 'primary',
    ...props
}: ButtonProps) {
    const variantClass = variant;

    return (
        <button className={className} data-variant={variantClass} {...props}>
            {buttonContent}
        </button>
    );
}

export default Button;
