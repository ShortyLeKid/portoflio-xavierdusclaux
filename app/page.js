import styles from './page.module.css'
import 'animate.css';


export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.content}>
				<h1 className={styles.contentTitle}>
					Hi, I'm Xavier.
				</h1>
				<div className={styles.contentDescription}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dignissimos repudiandae, doloribus consectetur nihil incidunt quas maiores sed maxime tenetur, molestiae ab culpa nesciunt, facilis quisquam quos temporibus obcaecati officiis atque deserunt? Molestiae placeat non blanditiis? Reiciendis voluptatibus fuga sed maiores commodi ipsam minus perspiciatis modi deserunt labore quisquam error quod, distinctio repellat? Ratione accusamus nihil id explicabo libero similique?
				</div>
			</div>
			<nav>
				<h2>
					Projects
				</h2>
				<ul>
					<li>
						<a href="#">Hayat website</a>
					</li>
					<li>
						<a href="#">CosmoKids</a>
					</li>
					<li>
						<a href="#">Placeholder</a>
					</li>
				</ul>
			</nav>
		</main>
	)
}
