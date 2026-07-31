import { redirect } from "next/navigation"
import { BadgeCheck } from "lucide-react"
import { createClient } from "@/lib/supabase/server"
import { Logo } from "@/components/brand/logo"
import { VerificationBanner } from "@/components/verification-banner"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { signOut } from "@/app/actions/auth"

export default async function FeedPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) redirect("/auth/login")

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, username, email_verified, phone_verified, verified, role")
    .eq("id", user.id)
    .single()

  const name = profile?.full_name ?? "there"
  const initials = (profile?.full_name ?? user.email ?? "G")
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()

  return (
    <div className="min-h-dvh bg-background">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
          <Logo />
          <div className="flex items-center gap-3">
            <Avatar className="size-9">
              <AvatarFallback className="bg-primary/10 text-sm font-medium text-primary">
                {initials}
              </AvatarFallback>
            </Avatar>
            <form action={signOut}>
              <Button type="submit" variant="ghost" size="sm">
                Sign out
              </Button>
            </form>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-2xl flex-col gap-6 px-4 py-8 sm:px-6">
        <div className="flex flex-col gap-1">
          <h1 className="font-serif text-3xl text-foreground text-balance">
            Welcome, {name}
          </h1>
          <p className="flex items-center gap-2 text-muted-foreground">
            {profile?.verified && <BadgeCheck className="size-4 text-primary" />}
            <span className="capitalize">{(profile?.role ?? "member").replace("_", " ")}</span>
          </p>
        </div>

        <VerificationBanner
          emailVerified={profile?.email_verified ?? false}
          phoneVerified={profile?.phone_verified ?? false}
        />

        <div className="rounded-xl border border-dashed border-border bg-card px-6 py-12 text-center">
          <p className="font-serif text-xl text-foreground">Your community feed is coming soon</p>
          <p className="mx-auto mt-2 max-w-sm text-pretty text-sm text-muted-foreground">
            Posts, communities, and giving activity will appear here as we build out the next phases of
            Givermi.
          </p>
        </div>
      </main>
    </div>
  )
}
