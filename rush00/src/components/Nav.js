import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css';

const Nav = () => (
  <Container>
    <h2>Markdown Based Board</h2>
    <div id="exTab3" className="container">
      <ul className="nav nav-pills">
        <li className="active">
          <Link to="/">
            <Button type="button">Main</Button>
          </Link>
        </li>
        <li>
          <Link to="/account/login">
            <Button type="button">Login</Button>
          </Link>
        </li>
        <li>
          <Link to="/account/profile">
            <Button type="button">Profile</Button>
          </Link>
        </li>
        <li>
          <Link to="/board">
            <Button type="button">Board</Button>
          </Link>
        </li>
      </ul>
    </div>
  </Container>
);

export default Nav;
/*
<div class="container"><h2>Example 3 </h2></div>
<div id="exTab3" class="container">	
<ul  class="nav nav-pills">
			<li class="active">
        <a  href="#1b" data-toggle="tab">Overview</a>
			</li>
			<li><a href="#2b" data-toggle="tab">Using nav-pills</a>
			</li>
			<li><a href="#3b" data-toggle="tab">Applying clearfix</a>
			</li>
  		<li><a href="#4a" data-toggle="tab">Background color</a>
			</li>
		</ul>
			<div class="tab-content clearfix">
			  <div class="tab-pane active" id="1b">
          <h3>Same as example 1 but we have now styled the tab's corner</h3>
				</div>
				<div class="tab-pane" id="2b">
          <h3>We use the class nav-pills instead of nav-tabs which automatically creates a background color for the tab</h3>
				</div>
        <div class="tab-pane" id="3b">
          <h3>We applied clearfix to the tab-content to rid of the gap between the tab and the content</h3>
				</div>
          <div class="tab-pane" id="4b">
          <h3>We use css to change the background color of the content to be equal to the tab</h3>
				</div>
			</div>
  </div>
<!-- Bootstrap core JavaScript
    ================================================== -->
	<!-- Placed at the end of the document so the pages load faster -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
	*/