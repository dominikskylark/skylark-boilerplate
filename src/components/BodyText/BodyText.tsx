// - transform: none, uppercase, lowercase, sentence case
// - alignment override: left, right, centre
// - colour override (css override): css variable
// - font-family override: font name


interface BodyTextProps {
    content: string;
    alignment: string;
    transform: string;
    color: string;
    fontFamily: string;
}

export default function BodyText({ content, transform, alignment, color, fontFamily }: BodyTextProps) {
    return <div dangerouslySetInnerHTML={{ __html: content }} />
}