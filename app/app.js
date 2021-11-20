//
var CAMPING = [
  {
    campingTitle: "TENT | MARMOT LIMESTONE 4P",
    campingThumbImg: "marmotLimestoneThumb.jpg",
    campingFullImg: "marmotLimestone2.jpg",
    itemImg: "marmotLimestone2.jpg",
    campingBriefDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    campingDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, expedita cum quam neque nostrum officiis libero ipsam ratione, amet quas temporibus dicta accusantium? Ad voluptate similique nam laborum amet officia?",
    campingPrice: "$370",
  },

  {
    campingTitle: "DOGS | OUTWARD HOUND BACKPACK",
    campingThumbImg: "outwardHoundThumb.jpg",
    campingFullImg: "outwardHound2.jpg",
    itemImg: "outwardHound2.jpg",
    campingBriefDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    campingDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, expedita cum quam neque nostrum officiis libero ipsam ratione, amet quas temporibus dicta accusantium? Ad voluptate similique nam laborum amet officia?",
    campingPrice: "$40",
  },
  {
    campingTitle: "TENT | REI HALF DOME",
    campingThumbImg: "halfDomeThumb2.jpg",
    campingFullImg: "halfDome2.jpg",
    campingBriefDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    campingDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, expedita cum quam neque nostrum officiis libero ipsam ratione, amet quas temporibus dicta accusantium? Ad voluptate similique nam laborum amet officia?",
    campingPrice: "$279",
  },
  {
    campingTitle: "SLEEP | HEST SLEEP SYSTEM PAD",
    campingThumbImg: "hestSleepThumb2.jpg",
    campingFullImg: "hestSleep2.jpg",
    itemImg: "hestSleep2.jpg",
    campingBriefDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    campingDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, expedita cum quam neque nostrum officiis libero ipsam ratione, amet quas temporibus dicta accusantium? Ad voluptate similique nam laborum amet officia?",
    campingPrice: "$399",
  },
  {
    campingTitle: "SLEEP | REI KINGDOM INSULATED 40",
    campingThumbImg: "kingdomInsulatedSleepThumb.jpg",
    campingFullImg: "kingdomInsulatedSleep2.jpg",
    itemImg: "kingdomInsulatedSleep2.jpg",
    campingBriefDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    campingDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, expedita cum quam neque nostrum officiis libero ipsam ratione, amet quas temporibus dicta accusantium? Ad voluptate similique nam laborum amet officia?",
    campingPrice: "$299",
  },
  {
    campingTitle: "TENT | REI KINGDOM 6",
    campingThumbImg: "kingdomSixThumb.jpg",
    campingFullImg: "kingdomSix.jpg",
    itemImg: "kingdomSix2.jpg",
    campingBriefDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    campingDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, expedita cum quam neque nostrum officiis libero ipsam ratione, amet quas temporibus dicta accusantium? Ad voluptate similique nam laborum amet officia?",
    campingPrice: "$499",
  },
  {
    campingTitle: "DOGS | MOUNTAINSMITH K-9",
    campingThumbImg: "mountainsmithK9Thumb.jpg",
    campingFullImg: "mountainsmithK92.jpg",
    itemImg: "mountainsmithK92.jpg",
    campingBriefDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    campingDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, expedita cum quam neque nostrum officiis libero ipsam ratione, amet quas temporibus dicta accusantium? Ad voluptate similique nam laborum amet officia?",
    campingPrice: "$70",
  },

  {
    campingTitle: "DOGS | RUFFWEAR GRIP TREX",
    campingThumbImg: "ruffwearGripTrexThumb.jpg",
    campingFullImg: "ruffwearGripTrex2.jpg",
    itemImg: "ruffwearGripTrex2.jpg",
    campingBriefDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    campingDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, expedita cum quam neque nostrum officiis libero ipsam ratione, amet quas temporibus dicta accusantium? Ad voluptate similique nam laborum amet officia?",
    campingPrice: "$75",
  },
  {
    campingTitle: "SLEEP | KINDERCONE 25",
    campingThumbImg: "kinderconeBagThumb.jpg",
    campingFullImg: "kindercone252.jpg",
    itemImg: "kindercone252.jpg",
    campingBriefDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    campingDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, expedita cum quam neque nostrum officiis libero ipsam ratione, amet quas temporibus dicta accusantium? Ad voluptate similique nam laborum amet officia?",
    campingPrice: "E",
  },
  {
    campingTitle: "SLEEP | SELK'BAG ORIGINAL 6G",
    campingThumbImg: "selkBagThumb.jpg",
    campingFullImg: "selkBag2.jpg",
    itemImg: "selkBag2.jpg",
    campingBriefDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    campingDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, expedita cum quam neque nostrum officiis libero ipsam ratione, amet quas temporibus dicta accusantium? Ad voluptate similique nam laborum amet officia?",
    campingPrice: "E",
  },
  // 4 objects/length 4; crash index value 0 - zelda index value 4
];

function loadData() {
  $.each(CAMPING, function (idx, camping) {
    $("#app").append(
      `
        <div id="${idx}" class="camping-holder">
        <h4>${camping.campingTitle}</h4>
        <div class="camping-image">
          <img src="images/${camping.campingThumbImg}" alt="${camping.campingTitle}" />
        </div>
        <div class="brief-price">
          <div class="brief-des">
            ${camping.campingBriefDescription}
          </div>
          <div class="brief-price">Price: ${camping.campingPrice}</div>
        </div>
      </div>
      `
    );
  });

  initListeners();
}
function initListeners() {
  $(".camping-holder").click(function (e) {
    let campingIndex = e.currentTarget.id;
    // console.log(campingIndex);
    $("#app").html(`
          <div class="camping">
        <h4>${CAMPING[campingIndex].campingTitle}</h4>
        <div class="campingImg">
          <img src="images/${CAMPING[campingIndex].campingFullImg}" alt="crash" />
        </div>
        <div class="campingDes">
        ${CAMPING[campingIndex].campingDescription}
        </div>
        <div class="price">Price: ${CAMPING[campingIndex].campingPrice}</div>
      </div><div class="close">Back</div>`);
    addCloseListener();
  });
}

function addCloseListener() {
  $(".close").click(function () {
    $("#app").html("");
    loadData();
  });
}
$(document).ready(function () {
  loadData();
});
