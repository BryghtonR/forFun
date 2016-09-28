var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope){
  //Clear current number
  $scope.clearNum = function(){
    $scope.paymentArr = [0];//use index0:0 to prevent NaN
    $scope.paymentNum = "0.00";//initial display
  };

  $scope.clearNum();

  //Converts Array of digits into correctly formatted number
  $scope.convertNum = function(){
    $scope.paymentNum = "";//clear
    for(n=0;n<$scope.paymentArr.length;n++){
      if(n==$scope.paymentArr.length-2){//places decimal point and deals with errors from using string:"."
        $scope.paymentNum = $scope.paymentNum.concat(".");
        $scope.paymentNum = $scope.paymentNum.concat($scope.paymentArr[n]);
      } else {
        $scope.paymentNum = $scope.paymentNum.concat($scope.paymentArr[n]);
      }
    }
    $scope.paymentNum = parseFloat($scope.paymentNum);
    $scope.paymentNum = $scope.paymentNum.toFixed(2);
  };

  //Concatinate Number
  $scope.addX = function(x, y){
    $scope.paymentArr.push(x);
    if(y===0){//used to enable double zero key
      $scope.paymentArr.push(y);
    }
    $scope.convertNum();
  };

  //Backspace
  $scope.removeNum = function(){
    if($scope.paymentArr.length>1){ //prevents NaN
      $scope.paymentArr.pop();
    }
    $scope.convertNum();
  };

});
