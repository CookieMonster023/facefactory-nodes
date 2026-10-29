import { app } from "../../scripts/app.js";
import { mountHaloExecutionNode, mountHaloParameterNode } from "./halo.52ae2af62fca385b.mjs";
const attach = (node) => { const id = node.comfyClass || node.type;
  if (id === "MATRIX_VideoMetadataKiller") mountHaloExecutionNode(node, { app });
  else if (id === "MATRIX_Prompt") mountHaloParameterNode(node, ["MATRIX_Prompt"], { app });
};
app.registerExtension({ name: "matrixlab.video-prompt", nodeCreated: attach, loadedGraphNode: attach });
