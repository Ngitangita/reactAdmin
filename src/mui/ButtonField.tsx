import Button from "@mui/material/Button";

const ButtonField = ({ record }: any) => {
  const handleCommentClick = () => {
    console.log(record);
  };

  return (
    <Button
      variant="contained"
      style={{ textTransform: "none" }}
      color="info"
      size="small"
      onClick={handleCommentClick}
    >
      comment
    </Button>
  );
};

export default ButtonField;