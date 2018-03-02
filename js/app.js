(() => {
  const Header = ({ titulo, parrafo }) => (
    <header>
      <h1>{titulo}</h1>
      <p>{parrafo}</p>
    </header>
  );

  const headerProps = {
    titulo: 'Getting Started',
    parrafo: 'Descripción'
  };

  ReactDOM.render(
    <Header  {...headerProps} />,
    document.getElementById('header')
  );
})();

(() => {
  const Article = ({ titulo, parrafo }) => (
    <article>
      <h3>{titulo}</h3>
      <p>{parrafo}</p>
      <hr />
    </article>
  );

  const Section = ({ title, articles }) => {
    const options = {
      style: {
        width: '70%',
        float: 'left'
      },
      id: 'main'
    };

    const listArticles = articles.map((element, index) => {
      const articleProps = {
        key: index.toString(),
        titulo: element.titulo,
        parrafo: element.parrafo
      };
      return <Article  {...articleProps} />
    });

    return (
      <section {...options}>
        <h2>{title}</h2>
        {listArticles}
      </section>
    );
  };

  const obj = {
    title: 'Main Section',
    articles: [
      {
        titulo: 'Titulo 1',
        parrafo: 'Descripcion 1'
      },
      {
        titulo: 'Titulo 2',
        parrafo: 'Descripcion 2'
      },
      {
        titulo: 'Titulo 3',
        parrafo: 'Descripcion 3'
      },
    ]
  };

  ReactDOM.render(
    <Section {...obj} />,
    document.getElementById('section')
  );
})();

(() => {
  const Aside = ({ links, title }) => {
    const options = {
      style: {
        width: '25%',
        float: 'right'
      }
    };

    const listLinks = links.map((element, index) => (
      <li key={index}>
        <a href='#'>{element}</a>
      </li>)
    );

    return (
      <aside {...options}>
        <h4>{title}</h4>
        {listLinks}
      </aside>);
  };

  const obj = {
    title: 'Links',
    links: ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5']
  };

  ReactDOM.render(
    <Aside {...obj} />,
    document.getElementById('aside')
  );
})();
