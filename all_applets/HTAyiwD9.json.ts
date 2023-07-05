if(parseInt(Beeminder.datapointAdded.DatapointValue) < 5000){
  Beeminder.addData.setDatapointValue("0");
  Beeminder.addData.setDatapointComment("Didn't pass 5000 steps today ("+ Beeminder.datapointAdded.DatapointValue+")");
}