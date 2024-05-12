import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <div className="py-40 bg-zinc-200 flex items-center">
            <div className="container">
                <h1 className="font-bold text-4xl mb-4">hero</h1>
                <p className="text-muted-foreground mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, inventore distinctio officia earum assumenda voluptatibus nisi amet accusamus maxime vel illum provident, similique dolore ab! Error excepturi ipsam obcaecati. Tempora!</p>
                <Button>問い合わせ</Button>
            </div>
        </div>
    )
}