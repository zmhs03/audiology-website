import ArticleCard from "../Components/ArticleCard";
import { articlesData } from "../Data/articles";

function Resources() {
	return (
		<div className="articles-container">
			<h2>Research Articles</h2>
			<div className="articles-grid">
				{articlesData.map((article) => (
					<ArticleCard
						key={article.id}
						article={article}
					/>
				))}
			</div>
		</div>
	);
}

export default Resources;
