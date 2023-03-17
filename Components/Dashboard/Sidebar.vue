<template>
    <div class="col-auto px-sm-2 px-0 bg-dark">
                <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <ul class="list-unstyled ps-0 ">
                        <li class="mb-1">
                          <button class="btn btn-toggle rounded text-white" data-bs-toggle="collapse" data-bs-target="#collection-collapse" >
                              MY COLLECTION
                          </button>
                          <div class="collapse show" id="collection-collapse">
                            <ul class="btn-toggle-nav list-unstyled pb-1 dropdown-nav">
                              <li><a href="#" class="nav-link rounded">My Reviews</a></li>
                              <li><a href="#" class="nav-link rounded">My Movies</a></li>
                              <li><a href="#" class="nav-link rounded">My TV Shows</a></li>
                              <li><a href="#" class="nav-link rounded">My Anime</a></li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                </div>
    </div>
</template>