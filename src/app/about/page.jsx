import Hero from "@/components/Hero";
import PageContainer from "@/components/PageContainer";

const AboutPage = () => {
  return (
    <>
      <Hero title="About Me" img="about-bg" />
      <PageContainer>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
          nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis
          sit soluta odio, adipisci quas excepturi maxime quae totam ducimus
          consectetur?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
          praesentium recusandae illo eaque architecto error, repellendus iusto
          reprehenderit, doloribus, minus sunt. Numquam at quae voluptatum in
          officia voluptas voluptatibus, minus!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
          consequuntur magnam, excepturi aliquid ex itaque esse est vero natus
          quae optio aperiam soluta voluptatibus corporis atque iste neque sit
          tempora!
        </p>
      </PageContainer>
    </>
  );
};

export default AboutPage;
