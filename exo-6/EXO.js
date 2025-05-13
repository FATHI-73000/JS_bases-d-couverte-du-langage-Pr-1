// Objet équipe
const team = {
    players: [],
    games: [],
  
    addPlayer(firstName, lastName, age) {
      this.players.push({ firstName, lastName, age });
    },
  
    addGame(opponent, teamPoints, opponentPoints) {
      this.games.push({ opponent, teamPoints, opponentPoints });
    }
  };
  
  // Ajout de joueurs
  team.addPlayer("Pablo", "Sanchez", 11);
  team.addPlayer("Lina", "Dubois", 13);
  team.addPlayer("Amine", "Bouzid", 12);
  team.addPlayer("Sophie", "Martin", 14);
  
  // Ajout de matchs
  team.addGame("Broncos", 42, 27);
  team.addGame("Tigers", 30, 22);
  team.addGame("Panthers", 38, 40);
  team.addGame("Lions", 45, 41);
  
  // Fonctions
  function getTotalTeamPoints() {
    return team.games.reduce((sum, game) => sum + game.teamPoints, 0);
  }
  
  function getAverageOpponentPoints() {
    const total = team.games.reduce((sum, game) => sum + game.opponentPoints, 0);
    return (total / team.games.length).toFixed(2);
  }
  
  function getOldestPlayer() {
    return team.players.reduce((oldest, player) => player.age > oldest.age ? player : oldest);
  }
  
  function getPlayersSortedByLastName() {
    return [...team.players].sort((a, b) => a.lastName.localeCompare(b.lastName));
  }
  
  // Affichage des statistiques
  function afficherStats() {
    const output = document.getElementById("output");
    const totalPoints = getTotalTeamPoints();
    const avgOpponentPoints = getAverageOpponentPoints();
    const oldest = getOldestPlayer();
    const sortedPlayers = getPlayersSortedByLastName();
  
    output.textContent =
      `➤ Total des points de l'équipe : ${totalPoints}\n` +
      `➤ Moyenne des points adverses : ${avgOpponentPoints}\n` +
      `➤ Joueur le plus âgé : ${oldest.firstName} ${oldest.lastName} (${oldest.age} ans)\n\n` +
      `➤ Joueurs triés par nom :\n` +
      sortedPlayers.map(p => `- ${p.firstName} ${p.lastName} (${p.age} ans)`).join('\n');
  }
  