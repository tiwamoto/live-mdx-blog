import Link from "next/link";
import Section from "./section";
import { Button } from "@/components/ui/button";

export default function Features() {
    return (
<section className="container py-20">
    <Section title="サービスの特徴" subTitle="素敵な機能が盛りだくさんです">
    <div className="grid lg:grid-cols-3 gap-4">
        
        <div className="border relative rounded-md p-6 shadow">
            <div className="aspect-video bg-muted"></div>
            <h2>記事タイトル<Link href="/" className="absolute inset-0"></Link></h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <Button>タグA</Button>
        </div>
        <div className="border rounded-md p-6 shadow">aaa</div>
        <div className="border rounded-md p-6 shadow">aaa</div>
    </div>
    </Section>
</section>
    )
}