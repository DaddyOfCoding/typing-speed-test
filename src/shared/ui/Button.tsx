import '@shared/styles/main.scss';
import '@shared/styles/Button.scss';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    buttonContent: React.ReactNode;
    buttonIcon?: React.ReactNode;
    variant: 'primary' | 'secondary' | 'ghost' | 'success';
};

function Button({
    className,
    buttonContent,
    buttonIcon,
    variant = 'primary',
    ...props
}: ButtonProps) {
    const variantClass = variant;

    return (
        <button className={className} data-variant={variantClass} {...props}>
            <span className='button-text'>{buttonContent}</span>
            {buttonIcon ? (
                <span className='button-icon'>{buttonIcon}</span>
            ) : null}
        </button>
    );
}

export default Button;
