alert(null || 2 || undefined); // alert 2
alert(alert(1) || 2 || alert(3)); // alert 1 and alert 2
alert(1 && null && 2); // alert null
alert(alert(1) && alert(2)); //alert 1 and alert undefined
alert(null || (2 && 3) || 4); //alert 3