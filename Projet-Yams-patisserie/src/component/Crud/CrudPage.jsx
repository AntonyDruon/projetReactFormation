// CrudPage.jsx

import { useState } from "react";
import ArticleList from "../ArticleList/ArticleList";

const CrudPage = () => {
  // Exemple de données d'articles
  const [articles, setArticles] = useState([
    { id: 1, title: "Article 1", content: "Contenu de l'article 1" },
    { id: 2, title: "Article 2", content: "Contenu de l'article 2" },
    // ... Ajoutez d'autres articles si nécessaire
  ]);

  const handleAddArticle = () => {
    // Logique pour ajouter un nouvel article
    // Vous pouvez ouvrir un formulaire de création d'article ici
  };

  const handleDeleteArticle = (id) => {
    // Logique pour supprimer l'article avec l'ID donné
    setArticles(articles.filter((article) => article.id !== id));
  };

  return (
    <div>
      <h1>Tableau de Bord CRUD</h1>
      <button onClick={handleAddArticle}>Ajouter un Article</button>
      <ArticleList articles={articles} />
    </div>
  );
};

export default CrudPage;
