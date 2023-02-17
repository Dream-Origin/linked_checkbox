const validateAllChildSelected = () => {
  const relatedBoxs = document.getElementsByName("relatedCheckBox");
  return [...relatedBoxs].map((ele) => ele.checked).every((_) => _ === true);
};
const validateSomeChildSelected = () => {
  const relatedBoxs = document.getElementsByName("relatedCheckBox");
  return [...relatedBoxs].map((ele) => ele.checked).some((_) => _ === true);
};

const handleRelatedCheckBoxChange = (evt) => {
  const checkAll = document.getElementById("triggerCheckBox");
  checkAll.checked = false;
  checkAll.indeterminate = false;
  if (validateAllChildSelected()) return (checkAll.checked = true);
  if (validateSomeChildSelected()) return (checkAll.indeterminate = true);
};

const triggerRelatedBoxStatus = (status) => {
  const relatedBoxs = document.getElementsByName("relatedCheckBox");
  relatedBoxs.forEach((ele) => {
    ele.checked = status;
  });
};

const toggleCheckAllBox = (eve) => {
  const status = eve.target.checked;
  triggerRelatedBoxStatus(status);
};

class handleCheckBoxs {
  constructor() {
    this.relatedBoxs = document.getElementsByName("relatedCheckBox");
    this.checkAll = document.getElementById("triggerCheckBox");
  }

  addChildEvents = function () {
    this.relatedBoxs.forEach((ele) => {
      ele.addEventListener("change", handleRelatedCheckBoxChange);
    });
  };
}

const addChildEvents = () => {
  const client = new handleCheckBoxs();
  client.addChildEvents();
};

const init = () => {
  const checkAll = document.getElementById("triggerCheckBox");
  checkAll.addEventListener("change", toggleCheckAllBox);
  addChildEvents();
};

init();
