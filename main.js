var reasons = [
  "1. Trees produce oxygen",
  "2. Trees give you food to eat",
  "3. Trees look very beautiful",
  "4. Trees help avoid soil erosion",
  "5. Trees help to reduce climate change"]
var images = [ "https://images.unsplash.com/photo-1610377551175-0c821b9db57f?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85",
  "https://images.unsplash.com/photo-1610401993005-336d2aaef4b7?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85",
  "https://images.unsplash.com/photo-1610393813108-fc9e481ce228?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85",
  "https://images.unsplash.com/photo-1610196063031-8831a191b9a1?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85",
  "https://images.unsplash.com/photo-1604460466589-202a0ff1ab27?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85"]
var index = 0;

function NextReason() { document.getElementById("reasonp").innerHTML = reasons[index];
document.getElementById("img").src = images[index];
index++;
  if(index > 4) {
    index = 4;
  }
}
function PrevReason() { document.getElementById("reasonp").innerHTML = reasons[index];
document.getElementById("img").src = images[index];
index--;
  if(index < 0) {
    index = 0;
  }
}