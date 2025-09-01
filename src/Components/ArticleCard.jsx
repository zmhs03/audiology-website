import { articlesData } from "../Data/articles";
import "../Styles/articles.css";

const ArticleCard = ({ article }) => {
	if (!article) {
		console.warn("ArticleCard: article prop is undefined");
		return null;
	}

	const handleCardClick = () => {
		window.open(article.url, "_blank", "noopener, noreferrer0"); //Article will open in a new tab
	};

	const handleKeyPress = (event) => {
		if (event.key === "Enter" || event.key === "") {
			//Handles keyboard navigation for accesssibilty
			event.preventDefault();
			handleCardClick();
		}
	};

	//Text will be truncated to a reasonable length for display
	const truncateText = (text, maxLength = 200) => {
		if (text.length <= maxLength) return text;
		return text.substring(0, maxLength) + "...";
	};

	const formatAuthors = (authors) => {
		if (authors.length === 1) return authors[0];
		if (authors.length === 2) return authors.join(" & ");
		return `${authors[0]} et al.`;
	};
	return (
		<div
			className="article-card"
			onClick={handleCardClick}
			onKeyDown={handleKeyPress}
			tabIndex={0}
			role="button"
			aria-label={"Read article:${article.title"}
		>
			<div className="article-header">
				<div className="article-badges">
					{article.openAccess && (
						<span className="badge-open-access">Open Access </span>
					)}
					{article.citations > 0 && (
						<span className="badge citations">
							{article.citations} citations
						</span>
					)}
				</div>
			</div>
			<div className="article-content">
				<h3 className="article-title">{article.title}</h3>

				<div className="article-meta">
					<p className="article-authors">
						{formatAuthors(article.authors)}
					</p>
					<p className="article-journal">
						{article.journal} ({article.year})
					</p>
				</div>

				<p className="article-abstract">
					{truncateText(article.abstract)}
				</p>

				{article.keywords && article.keywords.length > 0 && (
					<div className="article-keywords">
						{article.keywords.slice(0, 4).map((keyword, index) => (
							<span
								key={index}
								className="keyword-tag"
							>
								{keyword}
							</span>
						))}
						{article.keywords.length > 4 && (
							<span className="keyword-more">
								+{article.keywords.length - 4} more
							</span>
						)}
					</div>
				)}

				<div className="article-footer">
					<span className="article-doi">DOI: {article.doi}</span>
				</div>
			</div>
		</div>
	);
};

const ArticleCards = () => {
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
};

export default ArticleCards;
