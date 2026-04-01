import Iter "mo:core/Iter";
import Time "mo:core/Time";

actor {
  type NewsItem = {
    headline : Text;
    summary : Text;
    category : Text;
    timestamp : Time.Time;
  };

  type RobloxGame = {
    title : Text;
    description : Text;
    playersOnline : Nat;
    topScore : Nat;
    genre : Text;
  };

  type PlayerCard = {
    username : Text;
    avatarColor : Text;
    wins : Nat;
    losses : Nat;
    score : Nat;
  };

  type ScoreboardEntry = {
    matchName : Text;
    score : Text;
    participants : Text;
  };

  let newsItems = [
    {
      headline = "Sports Legend Retires";
      summary = "Breaking news: Iconic player announces retirement after decades of success.";
      category = "Breaking News";
      timestamp = 1_720_000_000_000_000_000;
    },
    {
      headline = "Local Team Wins Championship";
      summary = "Fans celebrate as local team clinches the championship title in a thrilling match.";
      category = "Championship";
      timestamp = 1_718_000_000_000_000_000;
    },
  ];

  let robloxGames = [
    {
      title = "Turbo Run";
      description = "Race against others in a fast-paced obstacle course.";
      playersOnline = 1200;
      topScore = 9800;
      genre = "Racing";
    },
    {
      title = "Build Battle";
      description = "Test your creativity in this competitive building game.";
      playersOnline = 800;
      topScore = 7500;
      genre = "Building";
    },
  ];

  let playerCards = [
    {
      username = "ProGamer1";
      avatarColor = "Blue";
      wins = 150;
      losses = 30;
      score = 2500;
    },
    {
      username = "Champion23";
      avatarColor = "Red";
      wins = 200;
      losses = 50;
      score = 3200;
    },
  ];

  let scoreboardEntries = [
    {
      matchName = "Final Showdown";
      score = "3-2";
      participants = "Dragons vs. Wolves";
    },
    {
      matchName = "Quick Match";
      score = "11-9";
      participants = "Speedsters vs. Falcons";
    },
  ];

  public query ({ caller }) func getAllNewsItems() : async [NewsItem] {
    newsItems.values().toArray();
  };

  public query ({ caller }) func getAllRobloxGames() : async [RobloxGame] {
    robloxGames.values().toArray();
  };

  public query ({ caller }) func getAllPlayerCards() : async [PlayerCard] {
    playerCards.values().toArray();
  };

  public query ({ caller }) func getAllScoreboardEntries() : async [ScoreboardEntry] {
    scoreboardEntries.values().toArray();
  };
};
