#version 130

in vec3 vVertexNormal;
out vec4 fragColor;

void main()
{
	vec3 normal = normalize(vVertexNormal);
	fragColor = vec4(0.5 * normal + 0.5, 1.0);
}
