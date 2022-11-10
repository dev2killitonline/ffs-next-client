import Accordion from "../../../reusable/Accordion/Accordion";
import SectionComp from "../../../shared/Section/SectionComp";

export default function HomeFAQ() {
  return (
    <section className="page__container">
      <SectionComp heading="Frequently Asked Questions">
        <Accordion
          items={[
            {
              title:
                "How can Flood & Fire Solutions help me with water damage? ",
              paragraphs: [
                "The first thing our team will do is meet with you, inspect the loss, and recommend where to start.",
                "When it comes to water damage, time is critical. The sooner you take action to mitigate the potential damage; the more can be saved and restored. ",
              ],
            },
            {
              title: "What areas does Flood & Fire Solutions serve?",
              paragraphs: [
                "Our team provides services across all of East Idaho with quick response times.",
                "Flood and Fire Solutions also has a Jackson Hole branch that serves western Wyoming.",
              ],
            },
            {
              title:
                "Can Flood & Fire Solutions rebuild my home after a disaster?",
              paragraphs: [
                "Yes. In cases where demolition is required, Flood and Fire Solutions offers quality rebuild services for the affected areas of your home. ",
              ],
            },
            {
              title:
                "I'm not sure if Flood & Fire Solutions is the right restoration company for me?",
              paragraphs: [
                "Our team has worked on it all, large and small. From bathrooms in one-bedroom apartments to entire multi-million dollar homes. All with a 4.9/5 rating from our customers.",
                "Flood & Fire Solutions was even voted the best company for water damage restoration in the greater Idaho Falls area in 2021.",
                "No matter your situation, our team has a solution.",
              ],
            },
            {
              title: "What would happen if I did nothing?",
              paragraphs: [
                "It varies greatly depending on the scale of the loss, but it's never a good idea. The sooner a loss is mitigated, the more can be saved and restored.",
                "Building materials are a lot like cereal. The longer you leave them saturated, the more soft and weak they become.",
                "It’s always worth getting an inspection performed to better understand the situation.",
              ],
            },
          ]}
        />
      </SectionComp>
    </section>
  );
}
