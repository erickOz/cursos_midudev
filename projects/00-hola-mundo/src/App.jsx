import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx"; // importamos el componente

export function App() {
  const formatUserName = (userName) => `@${userName}`;

  return (
    <main className="App">
      <TwitterFollowCard
        isFollowing
        formatUserName={formatUserName}
        name="Miguel Angel Durán"
        userName="midudev"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing
        name="Víctor Bonilla"
        userName="victorbonillap"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing={false}
        name="Pablo Hernández"
        userName="pheralb"
      />
      <TwitterFollowCard
        isFollowing
        formatUserName={formatUserName}
        name="Erick Olivares"
        userName="erickOz"
      />
    </main>
  );
}
