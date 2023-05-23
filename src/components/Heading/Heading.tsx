
// heading tag: h1 - h6
// transform: none, uppercase, lowercase, sentence case
// alignment override: left, right, centre
// colour override (css override): css variable
// font-family override: font name

interface HeadingProps {
    tag: number;
    text: string;
    alignment: string;
    transform: string;
    color: string;
    fontFamily: string;
}

export default function Heading({ tag, text, alignment, transform, color, fontFamily }: HeadingProps) {
    const HeadingTag = `h${tag}`;

    return <HeadingTag style={{ color: color }}>{text}</HeadingTag>
}