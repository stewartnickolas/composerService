


function resizeSideMenu(){
  alert("something");
  var maxHeight = window.height - 50 - 76;
  var menuHeight = 0;
  //determine initial height of menu (sub menu will be set when calling changeSubMenu)
  $(".sideMenuTab").each(function() {
    menuHeight += $(this).outerHeight();
  });
  
  var clippingHeight = menuHeight;
  if (menuHeight > maxHeight) {
    //clip to max height - n px to make an even multiple of tab height
    clippingHeight = (Math.round(maxHeight / $("#sideMenuTab1").outerHeight())) * $("#sideMenuTab1").outerHeight();
  }
  alert(clippingHeight + ", " + menuHeight);
  $("#sideMenuClip").outerHeight(clippingHeight);
  $("#sideMenu").outerHeight(menuHeight);
  $("#sideSubMenuClip").outerHeight(clippingHeight);
  $("#sideMenuArrow").outerHeight(clippingHeight + ($("#sideMenuUp").outerHeight() * 2));
}

 function loadSideMenu(){
  var sideMenuActive = true;
  var activeSubMenu = null;//id of the current sub menu, if any
  var menuHeight = 0;
  var subMenuHeight = 0;
  var navContainerWidth = 200;
  var menuWidth = navContainerWidth * 2;
  var maxHeight = window.height - 50 - 76;//50 for padding, 240 for header
  var pulseRate = 800;
  var activeTab;
  var activeSubTab;
  var leftUpPulseActive = false;
  var leftDownPulseActive = false;
  var rightUpPulseActive = false;
  var rightDownPulseActive = false;
  var tabActiveColor = "rgba(51,153,153,0.95)";
  var tabInactiveColor = "";
  var subTabActiveColor = "rgba(51,153,153,0.95)";
  var subTabInactiveColor = "";

 
  //set the initial background colors for the menu
  $("#sideMenu").css({
    'background-color': tabInactiveColor
  });
  $(".sideMenuTab").css({
    'background-color': tabInactiveColor
  });
  $(".sideSubMenu").css({
    'background-color': subTabInactiveColor
  });
  $(".sideSubTab").css({
    'background-color': subTabInactiveColor
  });


  //determine initial heights of menu (sub menu will be set when calling changeSubMenu)
  $(".sideMenuTab").each(function() {
    menuHeight += $(this).outerHeight();
  });

  var clippingHeight = menuHeight;
  if (menuHeight > maxHeight) {
    //clip to max height - n px to make an even multiple of tab height
    clippingHeight = (Math.round(maxHeight / $("#sideMenuTab1").outerHeight())) * $("#sideMenuTab1").outerHeight();
  }

  //set css nav width based on js value
  $("#navContainerLeft").css({
     width : navContainerWidth
  });
  $("#navContainerRight").css({
     left : navContainerWidth,
     width : '0px'
  });
  $("#sideMenuUp").css({
    width : navContainerWidth
  });
  $("#sideMenuDown").css({
    width : navContainerWidth
  });
  $("#sideMenuArrow").css({
    left : navContainerWidth
  });
  //if first time, set active to first in list 
  if (activeTab == null) {
    activeTab = $("#menuCurrentSelections").attr("data-currentTab");
    activeSubTab = $("#menuCurrentSelections").attr("data-currentSubTab");
    activeSubMenu = $("#" + activeTab).attr("data-submenu");
    checkMenuPos("main", null);
    if ($("#" + activeTab).attr("data-submenu").length > 0) {//have subtabs to display
      checkMenuPos("sub", activeSubMenu);
      $("#" + activeSubTab).css({
        'background-color': subTabActiveColor
      });
      changeSubMenu(activeTab, $("#" + activeTab).attr("data-submenu"));
      $("#sideMenuContainer").animate({
        left: -menuWidth
      }, function() {
        sideMenuActive = false;
      });
    } else {//if there are no subtabs to display, highlight the active tab
      $("#" + activeTab).css({
        'background-color': tabActiveColor
      });
      $("#sideMenuContainer").animate({
        left: -navContainerWidth
      }, function() {
        sideMenuActive = false;
      });
    }
  }

  
  //toggleSideMenu();//always pull the menu in if this is a first load 
  
  $("#sideMenuClip").outerHeight(clippingHeight);
  $("#sideMenu").outerHeight(menuHeight);
  $("#sideSubMenuClip").outerHeight(clippingHeight);
  $("#sideMenuArrow").outerHeight(clippingHeight + ($("#sideMenuUp").outerHeight() * 2));

  // startPulse($("#sideMenuArrow"));

  $("#sideMenuArrow").click(toggleSideMenu);
  $("#sideMenuContainer").hover(function() {
    if (sideMenuActive !== true) {
      slideOut();
    }
  },
          function() {
            if (sideMenuActive === true) {
              slideIn();
            }
          });

  $(".sideMenuTab").click(function() {
    activeTab = $(this).attr("id");
    if ($(this).attr("data-submenu") !== "") {
      changeSubMenu(activeTab, $(this).attr("data-submenu"));
      activeSubMenu = $(this).attr("data-submenu");
    } else {//if it has no sub tabs, go directly to the form
      goToLink($(this).attr("data-link"));
    }
  });
  $(".sideSubTab").click(function() {
    activeSubTab = $(this).attr("id");
    $(".sideSubTab").css({
      'background-color': subTabInactiveColor
    });

    $("#" + activeSubTab).css({
      'background-color': subTabActiveColor
    });
    goToLink($(this).attr("data-link"));
    toggleSideMenu();
  });



  $("#sideMenuUp").click(function() {
    var topPos = $("#sideMenuClip").scrollTop();
    $("#sideMenuClip").animate({
      scrollTop: topPos - clippingHeight
    }, 600, function(){checkMenuPos("main", null);});
  });

  $("#sideMenuDown").click(function() {
    var topPos = $("#sideMenuClip").scrollTop();
    $("#sideMenuClip").animate({
      scrollTop: topPos + clippingHeight
    }, 600, function(){checkMenuPos("main", null);});
  });


  $("#sideSubMenuUp").click(function() {
    var topPos = $("#sideSubMenuClip").scrollTop();
    $("#sideSubMenuClip").animate({
      scrollTop: topPos - clippingHeight
    }, 600, function(){checkMenuPos("sub", activeSubMenu);});
  });

  $("#sideSubMenuDown").click(function() {
    var topPos = $("#sideSubMenuClip").scrollTop();
    $("#sideSubMenuClip").animate({
      scrollTop: topPos + clippingHeight
    }, 600, function(){checkMenuPos("sub", activeSubMenu);});
  });

  function changeSubMenu(tabId, subTabId) {
    $(".sideMenuTab").each(function() {
      $(this).css({
        'background-color': tabInactiveColor
      });

    });

    $("#" + tabId).css({
      'background-color': tabActiveColor
    });
    $(".sideSubMenu").css({
      display: 'none'
    });

    $("#" + subTabId).css({
      display: 'block'
    });
    $("#navContainerRight").animate({
      width: navContainerWidth
    }, 400);
    $("#sideMenuArrow").animate({
      left: menuWidth
    }, 400);

    //determine what the height of the subMenu should be based on number of tabs
    //if less than the menu height, set to menu height
    subMenuHeight = 0;
    var subMenuId = $("#" + tabId).attr("data-submenu");
    var numSubTabs = $("#" + subMenuId).children().length;

    $("#" + subMenuId).children('.sideSubTab').each(function() {
      subMenuHeight += $(this).outerHeight();
    });
    if (subMenuHeight < clippingHeight) {
      subMenuHeight = clippingHeight;
    }
    $("#" + subMenuId).outerHeight(subMenuHeight);

  }

  function toggleSideMenu() {
    if (sideMenuActive == false) {
      $("#sideMenuContainer").animate({
        left: '0px'
      }, function() {
        sideMenuActive = true;
      });
    } else {
      if ($("#navContainerRight").width() > navContainerWidth/2) {
        $("#sideMenuContainer").animate({
          left: -menuWidth
        }, function() {
          sideMenuActive = false;
        });
      } else {
        $("#sideMenuContainer").animate({
          left: -navContainerWidth
        }, function() {
          sideMenuActive = false;
        });

      }

    }
  }

  function slideOut() {
    if (sideMenuActive == false) {
      $("#sideMenuContainer").animate({
        left: '0px'
      }, function() {
        sideMenuActive = true;
      });
    }
  }

  function slideIn() {
    if ($("#navContainerRight").width() > navContainerWidth/2) {
      $("#sideMenuContainer").animate({
        left: -menuWidth
      }, function() {
        sideMenuActive = false;
      });
    } else {
      $("#sideMenuContainer").animate({
        left: -navContainerWidth
      }, function() {
        sideMenuActive = false;
      });

    }
  }
  function goToLink(formname) {
    $("#bodyForm").append('<input type="submit" id="menuSubmitBtn" name="' + formname + '" onClick="dontNeedToCheck();" />');
    $("#menuSubmitBtn").click();
  }

  function pulse(){
      $(this).animate({opacity: 0}, pulseRate, function() {
        $(this).animate({opacity: 0.5}, pulseRate, function() {
          $(this).trigger('fade-cycle');
        });
      });  
  }
  function startPulse(element) {
    element.bind('fade-cycle', pulse);
    element.trigger('fade-cycle',pulse);
  }
  
  function stopPulse(element) {
    element.stop();
    element.unbind('fade-cycle', pulse);
    element.animate({opacity:0}, pulseRate);
  }

  function checkMenuPos(menu, subMenuId) {
    if (menu === "main") {

      var topPos = $("#sideMenuClip").scrollTop();
      if ($("#sideMenu").height() > clippingHeight) {
        if (topPos == 0) {//at top, flash bottom
          if(!leftDownPulseActive){
            startPulse($("#sideMenuDownOverlay"));
          }
          stopPulse($("#sideMenuUpOverlay"));
          leftDownPulseActive = true
          leftUpPulseActive = false;
          //alert("at top");
        } else if (topPos + clippingHeight == $("#sideMenu").height()) {//at the bottom, flash top
          if(!leftUpPulseActive){
            startPulse($("#sideMenuUpOverlay"));
          }
          stopPulse($("#sideMenuDownOverlay"));
          leftUpPulseActive = true;
          leftDownPulseActive = false;
          //alert("at bottom")
        } else { //in the middle, flash top and bottom
          if(!leftUpPulseActive){
            startPulse($("#sideMenuUpOverlay"));
          }
          if(!leftDownPulseActive){
            startPulse($("#sideMenuDownOverlay"));
          }
          leftUpPulseActive = true;
          leftDownPulseActive = true;
          //alert("in middle");
        }
      }
    } else if (menu === "sub") {
      var topPos = $("#sideSubMenuClip").scrollTop();
      if ($("#" + subMenuId).height() > clippingHeight) {
        if (topPos == 0) {//at top, flash bottom
          if(!rightDownPulseActive){
            startPulse($("#sideSubMenuDownOverlay"));
          }
          stopPulse($("#sideSubMenuUpOverlay"));
          rightDownPulseActive = true;
          rightUpPulseActive = false;
          //alert("at top");
        } else if (topPos + clippingHeight == $("#" + subMenuId).height()) {//at the bottom, flash top
          if(!rightUpPulseActive){
            startPulse($("#sideSubMenuUpOverlay"));
          }
          stopPulse($("#sideSubMenuDownOverlay"));
          rightUpPulseActive = true;
          rightDownPulseActive = false;
          //alert("at bottom")
        } else { //in the middle, flash top and bottom
          if(!rightUpPulseActive){
            startPulse($("#sideSubMenuUpOverlay"));
          }
          if(!rightDownPulseActive){
            startPulse($("#sideSubMenuDownOverlay"));
          }
          rightUpPulseActive = true;
          rightDownPulseActive = true;
          //alert("in middle");
        }
      }

    }
  }
    
  };
