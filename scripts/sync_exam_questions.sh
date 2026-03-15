#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SRC_DIR="$ROOT_DIR/src/exam-questions"
AUTHORING_DIR="$ROOT_DIR/exam-questions"

mkdir -p "$SRC_DIR"

cp "$AUTHORING_DIR/exam_strategy.md" "$SRC_DIR/exam_strategy.md"
cp "$AUTHORING_DIR/practice_exam_1.md" "$SRC_DIR/practice_exam_1.md"
cp "$AUTHORING_DIR/practice_exam_2.md" "$SRC_DIR/practice_exam_2.md"
cp "$AUTHORING_DIR/practice_exam_3.md" "$SRC_DIR/practice_exam_3.md"
cp "$AUTHORING_DIR/practice_exam_4.md" "$SRC_DIR/practice_exam_4.md"
cp "$AUTHORING_DIR/practice_exam_5.md" "$SRC_DIR/practice_exam_5.md"
