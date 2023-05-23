import BodyText from "@/components/BodyText";
import Button from "@/components/Button";
import Heading from "@/components/Heading"
import { classNames as cn } from '../../utils/classNames'

// Call to action block
// - heading: plain text
// - block of text / body: rich text
// - call to action button: label, value, icon

// Blocks global props:
// - contained / full width
// - content alignment (left, right, centre)
// - vertical aligment (top, bottom, middle)

interface CTABlockProps {
    heading: string;
    block: string;
    callToAction: object;
    container: string;
    horizontalAlignment: 'left' | 'right' | 'centre';
    verticalAlignment: 'top' | 'bottom' | 'middle';
}


export default function CTABlock({ heading, block, callToAction, container, horizontalAlignment, verticalAlignment }: CTABlockProps) {
    return <div>
        <Heading props={heading} />
        <BodyText />
        <Button label="Click me" action={() => alert("Hiya")} />
    </div>
}