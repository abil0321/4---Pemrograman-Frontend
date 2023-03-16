import Hello from "./Hello";

const Main = () => {
    return (
      <main>
        {/* <Hello nama="Abil" jurusan="SE"/>
        <Hello nama="Nasrul" jurusan="DG"/>
        <Hello nama="Efendi" jurusan="PSJ"/>
        <Hello nama="Aziz" jurusan="CS"/>
        <Hello nama="Amirul" jurusan="PSJ"/> */}

        <Hello name="Abil" major="Software Engineer"/>
        <Hello name="Nasrul" major="Desainer"/>
        <Hello name="Efendi" major="Network Engineer"/>
        {/* <Hello name="Aziz"/>
        <Hello name="Amirul"/> */}
      </main>
    );
  }

export default Main;