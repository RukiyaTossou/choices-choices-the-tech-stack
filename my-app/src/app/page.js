import  './styles/homepage.css';
export default async function HomePage() {
  try {
    // Fetch data van de API
    const res = await fetch('https://fdnd-agency.directus.app/items/fabrique_art_objects', { cache: 'no-store' });

    // Check of de response is OK (status 200-299)
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    // response naar JSON
    const data = await res.json();
    console.log("API data:", data);

    // const data 
    const artObjects = data.data;

    return (
      <section>
        <h1>Art Objects</h1>
        <ul class="masonry">
          {artObjects.map((artObject) => (
            <li class="masonry-item" key={artObject.id}>
              <figure>
              <img
                src={'https://fdnd-agency.directus.app/assets/' + artObject.image} 
                alt={artObject.title || 'Art Object'}
                width={300}
                height={200} />
             < img/>
                <figcaption>
                  <h2>{artObject.title}</h2>
                  <a href="#" class="button">Meer info</a>
                </figcaption>
              </figure>
              
            </li>
          ))}
        </ul>
      </section>
    );
  } catch (error) {
    return (
      <div>
        <h1>Error</h1>
        <p>Failed to load data from the API.</p>
      </div>
    );
  }
}