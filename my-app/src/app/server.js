export default async function Page() {
    let data = await fetch('https://fdnd-agency.directus.app/items/fabrique_art_objects', { cache: 'no-store' })
    let posts = await data.json()
    return (
        <p>
             {posts.map((post) => (
                <h1>post</h1>
        ))}

        </p>
       
   
    )
  }
