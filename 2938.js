"use strict";(self.webpackChunkmy_application=self.webpackChunkmy_application||[]).push([[2938],{2938:(e,n,r)=>{r.r(n),r.d(n,{default:()=>i});const i='#!/bin/bash\r\n# Simple line count example, using bash\r\n#\r\n# Bash tutorial: http://linuxconfig.org/Bash_scripting_Tutorial#8-2-read-file-into-bash-array\r\n# My scripting link: http://www.macs.hw.ac.uk/~hwloidl/docs/index.html#scripting\r\n#\r\n# Usage: ./line_count.sh file\r\n# -----------------------------------------------------------------------------\r\n\r\n# Link filedescriptor 10 with stdin\r\nexec 10<&0\r\n# stdin replaced with a file supplied as a first argument\r\nexec < $1\r\n# remember the name of the input file\r\nin=$1\r\n\r\n# init\r\nfile="current_line.txt"\r\nlet count=0\r\n\r\n# this while loop iterates over all lines of the file\r\nwhile read LINE\r\ndo\r\n    # increase line counter\r\n    ((count++))\r\n    # write current line to a tmp file with name $file (not needed for counting)\r\n    echo $LINE > $file\r\n    # this checks the return code of echo (not needed for writing; just for demo)\r\n    if [ $? -ne 0 ]\r\n     then echo "Error in writing to file ${file}; check its permissions!"\r\n    fi\r\ndone\r\n\r\necho "Number of lines: $count"\r\necho "The last line of the file is: `cat ${file}`"\r\n\r\n# Note: You can achieve the same by just using the tool wc like this\r\necho "Expected number of lines: `wc -l $in`"\r\n\r\n# restore stdin from filedescriptor 10\r\n# and close filedescriptor 10\r\nexec 0<&10 10<&-'}}]);
//# sourceMappingURL=2938.js.map