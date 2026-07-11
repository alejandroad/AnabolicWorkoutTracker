import { signIn, signOut, auth } from "@/auth"

export default async function Home() {
  const session = await auth()

  return (
    <div style={{ padding: "2rem" }}>
      {session ? (
        <>
          <p>Signed in as {session.user?.email}</p>
          <form action={async () => { "use server"; await signOut() }}>
            <button type="submit">Sign out</button>
          </form>
        </>
      ) : (
        <form action={async () => { "use server"; await signIn("google") }}>
          <button type="submit">Sign in with Google</button>
        </form>
      )}
    </div>
  )
}