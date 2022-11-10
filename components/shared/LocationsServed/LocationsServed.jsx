import SectionComp from "../Section/SectionComp";

export default function LocationsServed() {
  return (
    <section className="page__container">
      <SectionComp heading="Locations We Serve">
        <div className="location__container">
          <ul className="location__list">
            <li>Idaho Falls</li>
            <li>Ammon</li>
            <li>Shelley</li>
            <li>Blackfoot</li>
            <li>Pocatello</li>
            <li>Rigby</li>
            <li>Rexburg</li>
            <li>Ashton</li>
            <li>Island Park</li>
          </ul>
        </div>
        <p className="location__text">
          Don't see a city near you listed? Give us a call. We serve all of East
          Idaho.
        </p>
      </SectionComp>
    </section>
  );
}
