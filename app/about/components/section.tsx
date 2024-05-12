import Link from "next/link";

export default function Section({
    title,
    subTitle,
    children
}: {
    title: string,
    subTitle: string,
    children: React.ReactNode
}) {
    return (
        <section className="container py-20">
            <div className="text-center space-y-6 mb-10">
                <h2 className="font-bold text-4xl">{title}</h2>
                <div className="text-muted-foreground">{subTitle}</div>
            </div>
            {children}
        </section>
    )
}