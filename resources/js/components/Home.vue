<template>
<v-app>

         <div class="row page-titles">
                    <div class="col-md-5 col-8 align-self-center">
                        <h3 class="text-themecolor">Patent Application</h3>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                            <li class="breadcrumb-item active">Patent Application</li>
                        </ol>
                    </div>
                    <div class="col-md-7 col-4 align-self-center">
                    
                    </div>
                </div>
                 

                <div class="container-fluid">
                    <button class="btn btn-success success"  data-toggle="modal" data-target="#myModal">Add Patent</button>
                    <br><br>
                               <div class="row">
                    <!-- Column -->
                    <div class="col-lg-4 col-md-4">
                        <div class="card card-inverse card-primary">
                            <a href="/waiting"><div class="card-body">
                                <div class="d-flex">
                                    <div class="m-r-20 align-self-center">
                                        <h1 class="text-white"><i class="ti-user"></i></h1>
                                    </div>
                                    <div>
                                        <h3 class="card-title">Waiting for Approval</h3>
                                        <h6 class="card-subtitle">1st</h6>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-4 align-self-center">
                                        <h2 class="font-light text-white">98</h2>
                                    </div>
                                    <div class="col-8 p-t-10 p-b-20 align-self-center">
                                        <div class="usage chartist-chart" style="height:65px"></div>
                                    </div>
                                </div>
                            </div></a>
                        </div>
                    </div>

                     <div class="col-lg-4 col-md-4">
                        <a href="/accepted"><div class="card card-inverse card-danger">
                            <div class="card-body">
                                <div class="d-flex">
                                    <div class="m-r-20 align-self-center">
                                        <h1 class="text-white"><i class="ti-user"></i></h1>
                                    </div>
                                    <div>
                                        <h3 class="card-title">Application Accepted</h3>
                                        <h6 class="card-subtitle">2nd</h6>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-4 align-self-center">
                                        <h2 class="font-light text-white">98</h2>
                                    </div>
                                    <div class="col-8 p-t-10 p-b-20 align-self-center">
                                        <div class="usage chartist-chart" style="height:65px"></div>
                                    </div>
                                </div>
                            </div>
                        </div></a>
                    </div>

                     <div class="col-lg-4 col-md-4">
                       <a href="/approved"> <div class="card card-inverse card-info">
                            <div class="card-body">
                                <div class="d-flex">
                                    <div class="m-r-20 align-self-center">
                                        <h1 class="text-white"><i class="ti-user"></i></h1>
                                    </div>
                                    <div>
                                        <h3 class="card-title">Application Approved</h3>
                                        <h6 class="card-subtitle">3rd</h6>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-4 align-self-center">
                                        <h2 class="font-light text-white">98</h2>
                                    </div>
                                    <div class="col-8 p-t-10 p-b-20 align-self-center">
                                        <div class="usage chartist-chart" style="height:65px"></div>
                                    </div>
                                </div>
                            </div>
                        </div> </a>
                    </div>

                     <div class="col-lg-4 col-md-4">
                       <a href="/submission"> <div class="card card-inverse card-warning">
                            <div class="card-body">
                                <div class="d-flex">
                                    <div class="m-r-20 align-self-center">
                                        <h1 class="text-white"><i class="ti-user"></i></h1>
                                    </div>
                                    <div>
                                        <h3 class="card-title">IPOPHIL Submission</h3>
                                        <h6 class="card-subtitle">4th</h6>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-4 align-self-center">
                                        <h2 class="font-light text-white">98</h2>
                                    </div>
                                    <div class="col-8 p-t-10 p-b-20 align-self-center">
                                        <div class="usage chartist-chart" style="height:65px"></div>
                                    </div>
                                </div>
                            </div>
                        </div></a>
                    </div>
                    <!-- Column -->
                    <!-- Column -->
                    <div class="col-lg-4 col-md-4">
                      <a href="/recieved">  <div class="card card-inverse card-success">
                            <div class="card-body">
                                <div class="d-flex">
                                    <div class="m-r-20 align-self-center">
                                        <h1 class="text-white"><i class="ti-thought"></i></h1>
                                    </div>
                                    <div>
                                        <h3 class="card-title">Recieved SOA</h3>
                                        <h6 class="card-subtitle">5th</h6>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-4 align-self-center">
                                        <h2 class="font-light text-white">123</h2>
                                    </div>
                                    <div class="col-8 p-t-10 p-b-20 text-right">
                                        <div class="spark-count" style="height:65px"></div>
                                    </div>
                                </div>
                            </div>
                        </div></a>
                    </div>
                     <div class="col-lg-4 col-md-4">
                       <a href="/completed"> <div class="card card-inverse teal">
                            <div class="card-body">
                                <div class="d-flex">
                                    <div class="m-r-20 align-self-center">
                                        <h1 class="text-white"><i class="ti-thought"></i></h1>
                                    </div>
                                    <div>
                                        <h3 class="card-title">Paid Completed</h3>
                                        <h6 class="card-subtitle">6th</h6>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-4 align-self-center">
                                        <h2 class="font-light text-white">233</h2>
                                    </div>
                                    <div class="col-8 p-t-10 p-b-20 text-right">
                                        <div class="spark-count" style="height:65px"></div>
                                    </div>
                                </div>
                            </div>
                        </div> </a>
                    </div>
                    <!-- Column -->
                    <!-- Column -->
                  
                    <!-- Column -->
                </div>
                </div>

                    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add for Patent</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <input class="form-control" type="file"><br><br>
        <input class="form-control" type="text" placeholder="Enter project name">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>
</v-app>
</template>