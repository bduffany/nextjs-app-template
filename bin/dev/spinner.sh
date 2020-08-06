#!/bin/bash
# Usage example: spinner.sh "Sleeping for 10 seconds..." sleep 10

function shutdown() {
  tput cnorm # reset cursor
}
trap shutdown EXIT

function cursorBack() {
  echo -en "\033[$1D"
}

message="$1"
shift

logfile=$(mktemp)

function spinner() {
  # make sure we use non-unicode character type locale 
  # (that way it works for any locale as long as the font supports the characters)
  local LC_CTYPE=C
  local pid=$1 # Process Id of the previous running command
  local spin='⣷⣯⣟⡿⢿⣻⣽⣾'
  local charwidth=3
  local i=0
  tput civis # cursor invisible
  ceol=$(tput el)
  while kill -0 $pid 2>/dev/null; do
    local i=$(((i + $charwidth) % ${#spin}))
    printf "%s %s" "${spin:$i:$charwidth}" "$message ..."
    sleep .1
    printf "\r${ceol}"
  done
  tput cnorm
  echo "✓ $message ... Done"
  wait $pid # capture exit code
  local exitcode=$?
  if [[ "$exitcode" != 0 ]] ; then
    cat "$logfile"
  fi
  rm "$logfile"
  return $exitcode
}

("$@") &>"$logfile" &

spinner $!