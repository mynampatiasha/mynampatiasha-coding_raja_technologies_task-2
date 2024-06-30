import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MusicContext } from "../Context";
import PinnedMusic from "./PinnedMusic";
import LikedMusic from "./LikedMusic";

const Navbar = ({ keyword, handleKeyPress, setKeyword, fetchMusicData }) => {
  const musicContext = useContext(MusicContext);
  const likedMusic = musicContext.likedMusic;
  const pinnedMusic = musicContext.pinnedMusic;
  const setResultOffset = musicContext.setResultOffset;

  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg bg-secondary sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_jJqi7XOQOUJYD_9MgHZm0AHiqEBl6k0JNbJ419mYrONShadvTfi-PedIBXvN-RVq6LE&usqp=CAU"
              alt="Spotify Logo"
              style={{ height: "100px", width: "100px", borderRadius: "500%", objectFit: "cover" }}
            />
          </Link>
          <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
            <div className="d-flex">
              <input
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
                onKeyDown={handleKeyPress}
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ width: "200px" }}
              />
              <button
                onClick={() => {
                  setResultOffset(0);
                  fetchMusicData();
                }}
                className="btn btn-outline-dark"
              >
                Search
              </button>
            </div>
            <ul className="navbar-nav mb-2 mb-lg-0">
              
              <li className="nav-item">
                <Link className="nav-link active btn btn-dark btn-md mx-3" to="/signup">Sign Up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active btn btn-dark btn-md mx-3" to="/signin">Sign In</Link>
              </li>
              <li className="nav-item d-flex align-items-center">
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  className="btn btn-dark btn-md mx-2"
                >
                  PinnedMusic
                  <i className="bi bi-pin-angle-fill"></i> {pinnedMusic.length}
                </button>
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#likedMusicModal"
                  className="btn btn-dark btn-md mx-2"
                >
                  LikedMusic
                  <i className="bi bi-heart-fill"></i> {likedMusic.length}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="modal fade modal-xl" id="exampleModal" tabIndex={1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Pinned Music</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <PinnedMusic />
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade modal-xl" id="likedMusicModal" tabIndex={1} aria-labelledby="likedMusicModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="likedMusicModalLabel">Liked Music</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <LikedMusic />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
