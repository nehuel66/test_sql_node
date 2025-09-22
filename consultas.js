//CONSULTAS.JS SEMANA 13
import db from './conexion.js';


async function getTelefonos() {
  const [rows] = await db.query(
    'SELECT nombre, apellido, telefono FROM paciente'
  );
  return rows;
}


async function getTelefonoPaciente(numero_historial) {
  const [rows] = await db.query(
    'SELECT telefono FROM paciente WHERE nro_historial_clinico = ?',
    [numero_historial]
  );
  if (rows.length === 0) return null;
  return rows[0].telefono;
}


async function getMedicosPaciente(numero_historial) {
  const [rows] = await db.query(
    `SELECT DISTINCT m.nombre, m.apellido
     FROM ingreso i
     INNER JOIN medico m ON i.matricula_medico = m.matricula
     WHERE i.nro_historial_paciente = ?`,
    [numero_historial]
  );
  return rows;
}


async function main() {
  console.log('--- Todos los pacientes con teléfono ---');
  const telefonos = await getTelefonos();
  console.log(telefonos);

  console.log('\n--- Teléfono de paciente 778 ---');
  const telefonoPaciente = await getTelefonoPaciente(778);
  console.log(telefonoPaciente);

  console.log('\n--- Médicos que atendieron al paciente 778 ---');
  const medicos = await getMedicosPaciente(778); 
  console.log(medicos);
}

main();
