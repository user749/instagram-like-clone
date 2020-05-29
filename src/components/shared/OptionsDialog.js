import React from "react";
import { useOptionsDialogStyles } from "../../styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import {Link} from "react-router-dom";
import {defaultPost} from "../../data";
import Dialog from "@material-ui/core/Dialog";


function OptionsDialog({onClose}) {
  const classes = useOptionsDialogStyles();

  return (<div>
    <Dialog
    open
    classes={{
      paperScrollPaper: classes.dialogScrollPaper
    }}
    onClose={onClose}
    TransitionComponent="Zoom"
    >
      <Button className={classes.redButton}>
        Unfollow
      </Button>
    <Divider />
      <Button className={classes.button}>
        <Link to={`/p/${defaultPost}`}>
          Go to post
        </Link>
      </Button>
      <Divider />
      <Button className={classes.button}>
        <Link to={`/p/${defaultPost}`}>
          Share
        </Link>
      </Button>
      <Divider />
      <Button className={classes.button}>
        <Link to={`/p/${defaultPost}`}>
          Copy Link
        </Link>
      </Button>
      <Divider />
      <Button onClick={onClose }
          className={classes.button}>
        <Link to={`/p/${defaultPost}`}>
          Cancel
        </Link>
      </Button>




    </Dialog>


  </div>);
}

export default OptionsDialog;
