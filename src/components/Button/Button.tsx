// - button style: [css classes] 
// - text colour override: css variable
// - bg colour override: css variable
// - alignment override: inherit, right, left, centre
// - icon flex: true or false (whether it's stacked or next to each other)
// - icon location: before, after

interface ButtonProps {
    label: string;
    action: () => void;
    buttonStyle: string[];
    colorOverride: string;
    backgroundOverride: string;
    alignment: string;
    iconFlex: string;
    iconLocation: string;
}


export default function Button({ buttonStyle, colorOverride, backgroundOverride, alignment, iconFlex, iconLocation, label, action }: ButtonProps) {
    return <button onClick={action}>{label}</button>
}