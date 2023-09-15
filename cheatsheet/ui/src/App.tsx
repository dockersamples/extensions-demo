import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid, Button, Typography } from '@mui/material';
import { createDockerDesktopClient } from '@docker/extension-api-client';

export function App() {
  const ddClient = createDockerDesktopClient();

  function sayHello() {
    console.log("Hi Console")
    ddClient.desktopUI.toast.success('Welcome to Docker Extensions CheatSheet');
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h1" gutterBottom>
          Welcome to the Docker Extension Cheatsheet
        </Typography>
        <Button variant="contained" onClick={sayHello}>
          Click me!
        </Button>
      </Grid>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table aria-label="cheatsheet table">
            <TableHead>
              <TableRow>
                <TableCell>Commands</TableCell>
                <TableCell>Command</TableCell>
                <TableCell>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Listing</TableCell>
                <TableCell>docker extension ls</TableCell>
                <TableCell>List all Docker Extensions</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Initializing</TableCell>
                <TableCell>docker extension init</TableCell>
                <TableCell>Create a new Docker Extension based on a template</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Installing</TableCell>
                <TableCell>docker extension install &lt;extension-name&gt;</TableCell>
                <TableCell>Install a Docker extension with the specified image</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Removing</TableCell>
                <TableCell>docker extension rm &lt;extension-name&gt;</TableCell>
                <TableCell>Remove a Docker extension</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Validating</TableCell>
                <TableCell>docker extension validate &lt;extension-name&gt;</TableCell>
                <TableCell>Validate an extension image or metadata file</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sharing</TableCell>
                <TableCell>docker extension share &lt;extension-namegt;</TableCell>
                <TableCell>Generate a link to share the extension</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
