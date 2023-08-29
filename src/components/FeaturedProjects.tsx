import { getFeaturedProjects } from "../lib/fetchers";
import ButtonLink from "./ButtonLink";
import FadeUp from "./FadeUp";
import ProjectsMasonry from "./ProjectsMasonry";

const FeaturedProjects = async () => {
	const projects = await getFeaturedProjects();

	return (
		<section className="max-w-2xl mt-20 mx-auto md:max-w-none md:mt-28" id="projects">
			<ProjectsMasonry
				projects={projects}
				className="flex-row-reverse"
				FirstItem={
					<div>
						<FadeUp cascade damping={0.15}>
							<h2 className="h2">Featured projects</h2>
							<p>Here are some of the projects that I've worked on:</p>
						</FadeUp>
					</div>
				}
				LastItem={
					<FadeUp>
						<ButtonLink href="/projects" variant="primary">
							See more projects
						</ButtonLink>
					</FadeUp>
				}
			/>
		</section>
	);
};

export default FeaturedProjects as unknown as () => JSX.Element;
