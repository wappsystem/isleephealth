//-------------------------------------
m.before_submit=function(record,dbv){
    if($vm.coq_participant!=undefined){
        record.Participant=$vm.coq_participant;
        record.Participant_uid=$vm.coq_participant_uid;
        dbv.S1=$vm.coq_visit;
        dbv.PPID=$vm.coq_participant_pid;
        dbv.PUID=$vm.coq_participant_uid;
    }
};
//-------------------------------------
